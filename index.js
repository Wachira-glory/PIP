// Step 1: Define data structure for user preferences
const userPreferences = {};
// Step 2: User onboarding
function addUser(userId, preferredCategories) {
    userPreferences[userId] = preferredCategories;
}
// Step 3: Recommendation retrieval
function getRecommendations(userId) {
    const preferredCategories = userPreferences[userId];
    if (!preferredCategories) return [];
    // Step 4: Generating recommendations based on preferred categories
    // For demonstration purposes, let's just return some hardcoded recommendations
    const recommendations = [];
    preferredCategories.forEach(category => {
        recommendations.push(`Top item in ${category}`);
        recommendations.push(`Popular item in ${category}`);
    });
    return recommendations;
}
// Example usage
addUser("user1", ["Electronics", "Fashion"]);
addUser("user2", ["Books"]);
console.log(`Recommendations for user1: ${getRecommendations("user1")}`);
console.log(`Recommendations for user2: ${getRecommendations("user2")}`);