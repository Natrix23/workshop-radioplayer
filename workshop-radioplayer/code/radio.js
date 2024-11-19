const API_URL = "http://api.sr.se/api/v2/channels?format=json&size=100";

async function fetchChannels() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();

        // Render the channels on the page
        renderChannels(data.channels);
    } catch (error) {
        console.error("Error fetching channels:", error);
        document.getElementById("channels").innerHTML = `<p>Error loading channels. Please try again later.</p>`;
    }
}

function renderChannels(channels) {
    const channelsContainer = document.getElementById("channels");

    channels.forEach(channel => {
        const channelElement = document.createElement("div");
        channelElement.className = "channel";
        channelElement.style.backgroundColor = `#${channel.color}`;

        const audioId = `audio-${channel.id}`;

        channelElement.innerHTML = `
            <img src="${channel.image}" alt="${channel.name}">
            <div class="container">
            <div>
            <h2>${channel.name}</h2>
            </div>
            <div>
            <audio id="${audioId}" controls>
                <source src="${channel.liveaudio.url}" type="audio/mpeg">
                Your browser does not support the audio element.
            </audio>
            </div>
            </div>
        `;

        channelsContainer.appendChild(channelElement);
    });
}

// Fetch and display channels when the page loads
fetchChannels();
