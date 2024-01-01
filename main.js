function facedown() {
	const images = document.querySelectorAll('div.letters > img');

	// Creating a randomized array
	const array = [0,1,2,3,4];
	const shuffledArray = array.sort((a, b) => 0.5 - Math.random());

	// Matching new sources of the images
	arr = [images[0], images[1], images[2], images[3], images[4]];  // Copying images 
	srcs = ["img/m.svg", "img/u.svg", "img/r.svg", "img/a.svg", "img/t.svg"]
	for (let i=0; i<5; i++) {
		arr[i].src = srcs[shuffledArray[i]];
	}

	// Delaying for two seconds and facing down
	setTimeout(function() {	
		arr = [images[0], images[1], images[2], images[3], images[4]];
		for (let i=0; i<5; i++) {
			arr[i].src = "img/letterBG.svg";
		}
	}, 2000);

	// Delaying two seconds user clicking the images for the game to be simultaneous 
	setTimeout(makeup.bind(null, shuffledArray), 2000);
}


function makeup(answers) {
	let i = 0;
	let score = 0;

	// Selecting all letters and listening events through for loop
	const images = document.querySelectorAll('div.letters > img');
	[...images].forEach((image, index) => {
		image.addEventListener('click', function() {
			console.log(index, i);
			if (answers[index] == i) {
				score += 20;
				if (score == 100) {
					updateScore(100);
					document.getElementById('winParagraph').style.display = 'inline-block';
					makeRestartVisible();
				}
				updateScore(score);
			}
			else {
				document.getElementById('loseParagraph').style.display = 'inline-block';
				document.getElementById('scoreTag').style.display = 'none';
				makeRestartVisible();
			}
			i+=1;
		});
	})
}


function updateScore(points) {
	const scoreElement = document.getElementById('scoreTag');
	scoreElement.innerHTML = `Score: ${points}`;
}

function makeRestartVisible() {
	const start = document.getElementById('startButton');
	const restart = document.getElementById('restartButton');
	restart.style.display = 'inline-block';
	start.style.display = "none";
}

function toggleClickability() {
	const images = document.querySelectorAll('div.letters > img');
	images.forEach(image => image.classList.toggle)
}