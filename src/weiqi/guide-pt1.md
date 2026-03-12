---
title: Weiqi Beginner's Guide
date: 2026-03-09
tags: weiqi
summary: An introduction to Weiqi explaining where beginners start.
layout: layouts/article.njk
---

<section id="introduction">
  <h2 class="h-name">Introduction</h2>
  <p>Weiqi, also known as Go or Baduk, is one of the world's oldest strategy games, yet its appeal has never
    faded. The rules are simple enough to learn in minutes, but the game's depth keeps players engaged for a
    lifetime. Many people are drawn to Weiqi because it rewards patience, creativity, and long-term thinking
    rather than memorization or quick reflexes. It offers a quiet, thoughtful kind of competition where each
    move shapes the entire board, and every game becomes its own story.
  </p>
</section>
<img class="blog-img" src="/img/weiqi-intro.png" loading="lazy" alt="A goban and stones">
<section id="board-and-stones">
  <h2 class="h-name">Board and Stones</h2>
  <p>Weiqi is played on a grid of intersecting lines, most commonly the full 19x19 board, though beginners
    often start on smaller 9x9 or 13x13 boards to learn the fundamentals. Black and white stones are placed on
    the intersections rather than inside squares, and once a stone is placed, it stays on the board unless it
    is captured. Stones that touch along the lines form groups and share liberties, the empty points that keep
    them alive. This simple setup creates a surprising amount of strategic possibility, as every stone
    influences the shape of the board.
  </p>
</section>
<section id="gameplay">
  <h2 class="h-name">Gameplay</h2>
  <p>Players alternate placing one stone at a time, with Black moving first. After each move, any stones that
    no longer have liberties are removed from the board, creating a natural rhythm of expansion, conflict, and
    resolution. The early game tends to be open and exploratory, with players staking out broad areas. As the
    board fills, the focus shifts to tactical fights, life-and-death struggles, and finally the precise
    endgame where every point matters. A player may pass when no profitable move remains, and when both
    players pass in succession, the game ends.
  </p>
</section>
<section id="goal">
  <h2 class="h-name">Goal</h2>
  <p>The aim of Weiqi is to control more territory than your opponent. Territory consists of empty points
    surrounded by your stones, and captured stones also contribute to your score. Throughout the game, players
    balance the desire to secure solid territory with the need to build influence and maintain efficient
    shapes. Good play often involves choosing moves that serve multiple purposes at once, strengthening your
    own position while limiting your opponent's options. When the board is settled, the player with the
    greater total of territory and captures wins.
  </p>
</section>
<section id="life-and-death">
  <h2 class="h-name">Life and Death</h2>
  <p>A central idea in Weiqi is whether a group of stones is alive or dead. A living group is one that cannot
    be captured, usually because it contains two separate internal liberties known as eyes. A dead group, even
    if still on the board, is one that can be captured with correct play. Some shapes resemble eyes but can be
    filled by the opponent; these are false eyes, and recognizing them is an important skill. Studying
    life-and-death problems, known as tsumego, helps players learn to read ahead and understand which groups
    can survive and which cannot.
  </p>
</section>
<section id="rules">
  <h2 class="h-name">Rules</h2>
  <p>Although the rules of Weiqi are straightforward, a few details are essential. The ko rule prevents a
    player from recreating the exact same board position immediately, stopping infinite loops and forcing
    players to fight ko battles with threats elsewhere on the board. Suicide is not allowed unless placing a
    stone would immediately capture opposing stones and restore liberties to the group. When both players
    pass, the game ends and the board is scored. Different rule sets vary slightly in how they count points,
    but the flow of the game remains the same across all traditions.
  </p>
  <h2 class="h-name">Example</h2>
  <p>A 9x9 board is an excellent way to learn because it keeps the game compact and easy to follow.
    Battles resolve quickly, and concepts like liberties, captures, and life-and-death become clear
    without the complexity of a full-sized board. Beginners can focus on reading short sequences and
    understanding basic shapes before moving on to larger boards. This section is a good place to
    include a simple example game or diagram later, showing how a small board develops from opening
    moves to final scoring.
  </p>
  <div class="slideshow">
    <div class="slide current-slide">
      <img class="goban" src="/img/figure1.png" loading="lazy" alt="Diagram of a 9x9 go-board.">
      <p>Black is aiming to control a big territory to the right. White is working on the left side.</p>
    </div>
    <div class="slide">
      <img class="goban" src="/img/figure2.png" loading="lazy" alt="Diagram of a 9x9 go-board.">
      <p>Black chooses to expand their own territory and reduce the white territory. White defends and black reinforces.</p>
    </div>
    <div class="slide">
      <img class="goban" src="/img/figure3.png" loading="lazy" alt="Diagram of a 9x9 go-board.">
      <p>White initiates this time and black needs to respond at 'A'.</p>
    </div>
    <div class="slide">
      <img class="goban" src="/img/figure4.png" loading="lazy" alt="Diagram of a 9x9 go-board.">
      <p>
        16 to 19 are an important standard sequence to remember.  
        20 to 23 are the same; if black had not defended, white would sneak into their territory.
      </p>
    </div>
    <div class="slide">
      <img class="goban" src="/img/figure5.png" loading="lazy" alt="Diagram of a 9x9 go-board.">
      <p>
        The borders are closed and both players choose to pass once they don't have any meaningful moves left.
      </p>
    </div>
    <nav>
      <button id="prev">&lt;</button>
      <span id="slide-num"></span>
      <button id="next">&gt;</button>
    </nav>
  </div>
</section>
<section id="test-yourself">
  <h2 class="p-name">Test Yourself</h2>
  <details>
    <summary>
      How many points of territory did white and black achieve respectively?
      <img class="goban" src="/img/figure5.png" loading="lazy" alt="Diagram of a 9x9 go-board">
    </summary>
    <img class="goban" src="/img/figure6.png" loading="lazy" alt="Diagram of a 9x9 go-board">
    White has 27 points of territory and black has 28.
  </details>
  <details>
    <summary>
      Where should white play to save their endangered stone?
      <img class="goban" src="/img/question1.png" loading="lazy" alt="Diagram of a 5x5 go-board">
    </summary>
    To save the stone with one liberty left, white needs to play at point D.
    The white stone went from one liberty to a stronger group of two with 3 liberties.
  </details>
  <details>
    <summary>
      Is white allowed to play at A?
      <img class="goban" src="/img/question2.png" loading="lazy" alt="Diagram of a 5x5 go-board">
    </summary>
    Yes. White can play here because it captures black's 1st stone
    and doesn’t violate the <a href="#rules">suicide rule</a>.
  </details>
  <details>
    <summary>
      Is black allowed to play at '1'?
      <img class="goban" src="/img/question3.png" loading="lazy" alt="Diagram of a 5x5 go-board">
    </summary>
    No. Directly playing at point '1' is against the
    <a href="#rules">ko rule</a> and black needs to play elsewhere
    before they can capture the '8' stone back.
  </details>
  <details>
    <summary>
      Is black allowed to play at '1'?
      <img class="goban" src="/img/question4.png" loading="lazy" alt="Diagram of a 5x5 go-board">
    </summary>
    Yes. Black can play at point '1' because they already played elsewhere at '9'.
    This does not violate the <a href="#rules">ko rule</a>.
  </details>
</section>

<script>
  // slideshow
document.addEventListener("DOMContentLoaded", () => {
  const slideshows = document.querySelectorAll(".slideshow");

  slideshows.forEach(slideshow => {
    const slides = slideshow.querySelectorAll(".slide");
    const prev = slideshow.querySelector("#prev");
    const next = slideshow.querySelector("#next");
    const slideNum = slideshow.querySelector("#slide-num");

    let index = 0;

    function showSlide(i) {
      slides.forEach(s => s.classList.remove("current-slide"));
      slides[i].classList.add("current-slide");
      slideNum.textContent = `${i + 1}`;
    }

    prev.addEventListener("click", () => {
      index = (index - 1 + slides.length) % slides.length;
      showSlide(index);
    });

    next.addEventListener("click", () => {
      index = (index + 1) % slides.length;
      showSlide(index);
    });

    showSlide(index);
    });
  });
</script>