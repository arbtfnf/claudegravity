-- Schema for Pulse Healthcare Initiative

-- Initiatives Table: To track major projects and their progress
CREATE TABLE initiatives (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  description TEXT,
  target_goal INTEGER,
  current_progress INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- User Actions Table: To track anonymous engagement
CREATE TABLE user_actions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  action_type TEXT NOT NULL, -- 'policy_audit', 'joined_initiative', 'report_fraud'
  post_id TEXT,
  metadata JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insurance Reports Table: To track scams and denials anonymously
CREATE TABLE insurance_reports (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  company_name TEXT NOT NULL,
  denial_reason TEXT,
  was_privacy_breached BOOLEAN DEFAULT FALSE,
  metadata JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert Initial Initiatives
INSERT INTO initiatives (title, description, target_goal, current_progress)
VALUES 
('The Transparency Map', 'Crowdsourcing insurance denial data across Indian cities.', 5000, 1240),
('Rural Connect Protocol', 'Standardizing referral data between rural and urban centers.', 1000, 215);
