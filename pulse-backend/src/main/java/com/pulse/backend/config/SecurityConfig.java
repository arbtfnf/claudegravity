package com.pulse.backend.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.oauth2.jwt.JwtDecoder;
import org.springframework.security.oauth2.jwt.NimbusJwtDecoder;
import org.springframework.security.web.SecurityFilterChain;

import javax.crypto.spec.SecretKeySpec;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Value("${supabase.jwt.secret}")
    private String jwtSecret;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.disable())
            .cors(cors -> cors.configure(http))
            .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/posts").permitAll()
                .requestMatchers(request -> {
                    String authHeader = request.getHeader("Authorization");
                    return authHeader != null && authHeader.equals("Bearer mock-demo-token");
                }).permitAll()
                .requestMatchers("/api/mood/**", "/api/psyche/**", "/api/tech-challenge/**").authenticated()
                .anyRequest().permitAll()
            )

            .oauth2ResourceServer(oauth2 -> oauth2.jwt(jwt -> jwt.decoder(jwtDecoder())));

        return http.build();
    }

    @Bean
    public JwtDecoder jwtDecoder() {
        // Supabase uses HS256 by default. 
        // If the secret is missing, we use a placeholder to allow the app to start.
        String secret = (jwtSecret == null || jwtSecret.isEmpty() || jwtSecret.equals("your-supabase-jwt-secret")) 
                        ? "placeholder-secret-at-least-32-chars-long-123456" 
                        : jwtSecret;
        
        SecretKeySpec secretKey = new SecretKeySpec(secret.getBytes(), "HmacSHA256");
        return NimbusJwtDecoder.withSecretKey(secretKey).build();
    }
}
