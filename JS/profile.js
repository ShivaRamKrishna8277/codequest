// progress bar
$(".circular-progress").each(function() {
    const progressBar = $(this);
    const progressValue = progressBar.find(".percentage");
    const innerCircle = progressBar.find(".inner-circle");
    let startValue = 0;
    const endValue = Number(progressBar.data("percentage"));
    const progressColor = progressBar.data("progress-color");
    const speed = 10;
    const progress = setInterval(() => {
        startValue++;
        progressValue.text(`${startValue}`);
        progressValue.css("color", progressColor);
        innerCircle.css("background-color", progressBar.data("inner-circle-color"));
        progressBar.css("background", `conic-gradient(${progressColor} ${startValue * 3.6}deg,${progressBar.data("bg-color")} 0deg)`);
        if (startValue === endValue) {
            clearInterval(progress);
        }
    }, speed);
});

$(".quest_score_wrapper").each(function() {
    const scorebar = $(this);
    const scoreValue = scorebar.find('#Quest_score');
    const innerBar = scorebar.find('.progress_bar_inner');
    const endScore = Number(scorebar.find('.progress_bar_inner').data("score"));
    const speed = 1; // Increase the speed
    const targetWidth = endScore / 10; // Convert score to percentage

    if(endScore <= 250){
        $('#quest_score_rank').text('Poor').css('color', 'red');
    }else if(endScore <= 500){
        $('#quest_score_rank').text('Fair').css('color', '#FF6B00');
    }else if(endScore <= 750){
        $('#quest_score_rank').text('V Good').css('color', '#008C16');
    }else{
        $('#quest_score_rank').text('Excellent').css('color', 'purple');
    }

    let currentWidth = 0;
    const progress = setInterval(() => {
        currentWidth += 0.1; // Increment by 0.1 for each interval
        scoreValue.text(`${Math.floor(currentWidth * 10)}`); // Update the displayed score value without decimal places

        // Set the width of the inner bar as a percentage of the total width with one decimal place
        innerBar.css("width", `${currentWidth.toFixed(1)}%`);

        if (currentWidth >= targetWidth) {
            clearInterval(progress);
        }
    }, speed);
});
// progress bar



// calendar heatmap
  const cal = new CalHeatmap();
  cal.paint({ theme: 'light' });
  // Get a reference to the container element
  const container = document.getElementById("cal-heatmap");
  // Create a new div element with the desired ID
  const div = document.createElement("div");
  div.id = "cal-heatmap";
  // Append the div element to the container
  container.appendChild(div);
// calendar heatmap