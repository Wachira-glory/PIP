# Step 1: Define data structure for user preferences
user_preferences = {}
# Step 2: User onboarding
def add_user(user_id, preferred_categories):
    user_preferences[user_id] = preferred_categories
# Step 3: Recommendation retrieval
def get_recommendations(user_id):
    preferred_categories = user_preferences.get(user_id, [])
    if not preferred_categories:
        return []
    # Step 4: Generating recommendations based on preferred categories
    # For demonstration purposes, let's just return some hardcoded recommendations
    recommendations = []
    for category in preferred_categories:
        recommendations.append(f"Top item in {category}")
        recommendations.append(f"Popular item in {category}")
    return recommendations
# Example usage
add_user("user1", ["Electronics", "Fashion"])
add_user("user2", ["Books"])
print(f"Recommendations for user1: {get_recommendations('user1')}")
print(f"Recommendations for user2: {get_recommendations('user2')}")