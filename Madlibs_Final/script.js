function generateStory() {
    const noun1 = document.getElementById('noun1').value;
    const verb1 = document.getElementById('verb1').value;
    const adjective1 = document.getElementById('adjective1').value;
    const place = document.getElementById('place').value;
    const verb2 = document.getElementById('verb2').value;
    const noun2 = document.getElementById('noun2').value;
    const adjective2 = document.getElementById('adjective2').value;
    const emotion = document.getElementById('emotion').value;
    const verb3 = document.getElementById('verb3').value;
    const noun3 = document.getElementById('noun3').value;

    const story = `In a ${adjective1} world, a curious ${noun1} ${verb1} around the ${place}. Suddenly, a ${adjective2} ${noun2} appeared and ${verb2} over the ${place}. The ${noun1} and ${noun2} became fast friends, and together, they ${verb3} and ${emotion} all day long.

As the sun set, the friends found a cozy spot under a ${noun3} and reflected on the day's adventures. It was a day filled with ${emotion}, laughter, and the joy of discovering new places. The ${noun1} and ${noun2} realized that true happiness comes from simple moments and unexpected friendships.

And so, in this magical world, the ${noun1} and ${noun2} continued their journey, creating more memories and spreading joy wherever they went.`;

    document.getElementById('story-display').innerHTML = `<p>${story}</p>`;
}
