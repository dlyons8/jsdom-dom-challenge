document.addEventListener('DOMContentLoaded', (event) => {
  const plus = document.getElementById('plus');
  const minus = document.getElementById('minus');
  const pause = document.getElementById('pause');
  const heart = document.getElementById('heart');
  const form = document.getElementById('comment-form');
  const likes = document.querySelector('ul.likes');
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

  function enable(array) {
    for (i = 0; i < array.length; i++) {
      if (array[i].id != "pause") {
        array[i].disabled = false
      }
    }
  }

  function disable(array) {
    for (i = 0; i < array.length; i++) {
      if (array[i].id != "pause") {
        array[i].disabled = true
      }
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
    let lastIndex = document.querySelectorAll("li").length - 1
    let lastNode = document.querySelectorAll("li")[lastIndex]

    if (lastNode && lastNode.dataset.num === `${counter.innerText}`) {
      let currentCount = lastNode.querySelector('span').innerHTML
      lastNode.innerHTML = `${counter.innerText} has been liked <span>${currentCount}</span> times`;
      lastNode.querySelector('span').innerHTML = parseInt(lastNode.querySelector('span').innerHTML) + 1
    } else {
      let li = document.createElement("li");
      li.dataset.num = `${counter.innerText}`;
      li.innerHTML = `${counter.innerText} has been liked <span>1</span> time`;
      likes.appendChild(li);
    }
  })

  pause.addEventListener('click', (event) => {
    event.preventDefault()
    let buttons = document.querySelectorAll('button')

    if (pause.innerText == "pause") {
      stop();
      disable(buttons);
      pause.innerText  = "resume";
    } else {
      start();
      enable(buttons);
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
