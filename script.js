// Utility function to get initials
function getInitials(name) {
  return name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

// Sample profiles to populate the feed
const sampleProfiles = [
  {
    name: "Maya",
    age: 27,
    location: "Manchester",
    looking: "Long-term",
    bio: "Loves peaks and pour-over.",
    interests: ["Hiking", "Indie", "Coffee"]
  },
  {
    name: "Aiden",
    age: 29,
    location: "Salford",
    looking: "Casual",
    bio: "Gamer + street food seeker.",
    interests: ["Gaming", "Calisthenics", "Tacos"]
  },
  {
    name: "Leah",
    age: 25,
    location: "Rochdale",
    looking: "Friendship",
    bio: "Poetry open-mic regular.",
    interests: ["Poetry", "Dogs", "Salsa"]
  }
];

// Render a profile card
function renderProfile(profile) {
  const card = document.createElement("div");
  card.className = "profile-card";

  const name = document.createElement("h3");
  name.textContent = `${profile.name} • ${profile.age}`;

  const details = document.createElement("p");
  details.textContent = `${profile.location} • ${profile.looking}`;

  const bio = document.createElement("p");
  bio.textContent = profile.bio;

  const interests = document.createElement("p");
  interests.textContent = `Interests: ${profile.interests.join(", ")}`;

  card.appendChild(name);
  card.appendChild(details);
  card.appendChild(bio);
  card.appendChild(interests);

  return card;
}

// Load feed with sample profiles
function loadFeed() {
  const feed = document.getElementById("feed");
  feed.innerHTML = "";

  sampleProfiles.forEach(profile => {
    const card = renderProfile(profile);
    feed.appendChild(card);
  });

  // Load user's profile if saved
  const userProfile = JSON.parse(localStorage.getItem("userProfile"));
  if (userProfile) {
    const card = renderProfile(userProfile);
    feed.insertBefore(card, feed.firstChild);
  }
}

// Handle form submission
document.getElementById("profileForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const profile = {
    name: document.getElementById("name").value.trim(),
    age: document.getElementById("age").value.trim(),
    location: document.getElementById("location").value.trim(),
    looking: document.getElementById("looking").value,
    bio: document.getElementById("bio").value.trim(),
    interests: [] // You can add interest parsing here later
  };

  localStorage.setItem("userProfile", JSON.stringify(profile));
  loadFeed();
  alert("Profile saved! Scroll down to see it in the feed.");
});

// Initialize feed on page load
window.addEventListener("DOMContentLoaded", loadFeed);
