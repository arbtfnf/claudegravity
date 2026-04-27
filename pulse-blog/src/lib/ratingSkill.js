// Pulse Rating Skill Logic

export const PULSE_TIERS = {
  DIAMOND: { label: 'Diamond', color: '#b9f2ff', minScore: 54 },
  PLATINUM: { label: 'Platinum', color: '#e5e4e2', minScore: 48 },
  GOLD: { label: 'Gold', color: '#ffd700', minScore: 40 },
  SILVER: { label: 'Silver', color: '#c0c0c0', minScore: 30 },
  BRONZE: { label: 'Bronze', color: '#cd7f32', minScore: 0 },
};

export const calculatePulseTier = (scores) => {
  const total = Object.values(scores).reduce((a, b) => a + b, 0);
  
  if (total >= PULSE_TIERS.DIAMOND.minScore) return PULSE_TIERS.DIAMOND;
  if (total >= PULSE_TIERS.PLATINUM.minScore) return PULSE_TIERS.PLATINUM;
  if (total >= PULSE_TIERS.GOLD.minScore) return PULSE_TIERS.GOLD;
  if (total >= PULSE_TIERS.SILVER.minScore) return PULSE_TIERS.SILVER;
  return PULSE_TIERS.BRONZE;
};

export const defaultHealthcareScores = {
  contentDepth: 9,
  factCheck: 8,
  researchIntegrity: 10,
  actionPotential: 9,
  readability: 8,
  trustScore: 10,
};
