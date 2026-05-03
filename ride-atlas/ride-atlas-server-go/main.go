package main

import (
	"encoding/json"
	"fmt"
	"log"
	"math/rand"
	"net/http"
	"os"
	"time"
)

type SimStats struct {
	Bike     string `json:"bike"`
	Biker    string `json:"biker"`
	TopSpeed int    `json:"topSpeed"`
	MaxRPM   int    `json:"maxRPM"`
}

type Place struct {
	ID        int      `json:"id"`
	Name      string   `json:"name"`
	Desc      string   `json:"desc"`
	Distance  int      `json:"distance"`
	Rating    float64  `json:"rating"`
	Tags      []string `json:"tags"`
	BestTime  string   `json:"bestTime"`
	Type      string   `json:"type"`
	Emoji     string   `json:"emoji"`
	Highlight string   `json:"highlight"`
	SimStats  SimStats `json:"simStats"`
}

var places []Place

func init() {
	superbikes := []string{"Kawasaki Ninja H2R", "Suzuki Hayabusa", "BMW S1000RR", "Ducati Panigale V4", "Yamaha YZF-R1", "Honda CBR1000RR-R", "Aprilia RSV4", "MV Agusta F4"}
	indianBikers := []string{"Arjun 'The Ghost' Varma", "Rohan 'Throttle' Sharma", "Vikram 'Nitro' Iyer", "Sameer 'Apex' Khan", "Aryan 'Redline' Das", "Ishaan 'Drift' Malhotra", "Vivaan 'Turbo' Nair", "Yash 'Burnout' Patil"}

	raw := [][]interface{}{
		{"Nandi Hills", "Iconic sunrise point & biker haven with hairpin bends", 60, 4.8, []string{"bike", "scenic", "family"}, "Oct-Mar, 5AM sunrise", "ride", "🌄", "Stunning sunrise above clouds"},
		{"Savandurga", "Largest monolith hill in Asia with trekking trails", 50, 4.5, []string{"bike", "adventure", "offbeat"}, "Nov-Feb", "trek", "⛰️", "Night treks possible"},
		{"Skandagiri", "Night trek paradise with starlit trails", 70, 4.7, []string{"bike", "adventure", "offbeat"}, "Oct-Jan, night treks", "trek", "🌌", "Stargazing + camping"},
		// ... adding core places
	}

	rand.Seed(time.Now().UnixNano())

	for i, r := range raw {
		places = append(places, Place{
			ID:        i,
			Name:      r[0].(string),
			Desc:      r[1].(string),
			Distance:  r[2].(int),
			Rating:    r[3].(float64),
			Tags:      r[4].([]string),
			BestTime:  r[5].(string),
			Type:      r[6].(string),
			Emoji:     r[7].(string),
			Highlight: r[8].(string),
			SimStats: SimStats{
				Bike:     superbikes[rand.Intn(len(superbikes))],
				Biker:    indianBikers[rand.Intn(len(indianBikers))],
				TopSpeed: 180 + rand.Intn(140),
				MaxRPM:   12000 + rand.Intn(4000),
			},
		})
	}
}

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = "3001"
	}

	http.HandleFunc("/api/places", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(places)
	})

	http.HandleFunc("/health", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "NITRO GO SERVER ONLINE 🏁")
	})

	fmt.Printf("🏎️ NITRO GO ENGINE screaming on port %s\n", port)
	log.Fatal(http.ListenAndServe(":"+port, nil))
}
