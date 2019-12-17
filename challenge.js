document.addEventListener('DOMContentLoaded', (event) => {
  const plus = document.getElementById('plus');
  const minus = document.getElementById('minus');
  const pause = document.getElementById('pause');
  const heart = document.getElementById('heart');
  const form = document.getElementById('comment-form');
  const likes = document.getElementById('likes');
  let interval

  function increaseInterval() {
    counter.innerHTML = parseInt(counter.innerHTML) + 1;
  }

  function decreaseInterval() {
    counter.innerHTML = parseInt(counter.innerHTML) - 1;
  }

  function start() {
    if (!interval) {
      interval = setInterval(function(){increaseInterval()}, 1000)
    }
  }

  function stop() {
    if (interval) {
      clearInterval(interval)
      interval = null
    }
  }

  start()

  plus.addEventListener('click', (event) => {
    event.preventDefault();
    increaseInterval();
  })

  minus.addEventListener('click', (event) => {
    event.preventDefault();
    decreaseInterval();
  })

  heart.addEventListener('click', (event) => {
    event.preventDefault();
    let times = 0
    let like = `${counter} has been liked 1 time`
    let ul = document.createElement('li')

  })

  pause.addEventListener('click', (event) => {
    event.preventDefault()
    if (pause.innerText == "pause") {
      stop();
      pause.innerText  = "resume";
    } else {
      start();
      pause.innerText = "pause";
    }
  })

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    let div = document.createElement('div')
    let comment = document.getElementById('comment-input');
    let list = document.getElementById('list');
    div.innerHTML = comment.value
    list.appendChild(div);
    comment.value = ""
  })

})
