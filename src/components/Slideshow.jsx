import { useState } from 'preact/hooks';

export default function Slideshow({ slides }) {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex(i => (i === 0 ? slides.length - 1 : i - 1));
  const next = () => setIndex(i => (i === slides.length - 1 ? 0 : i + 1));

  return (
    <div class="slideshow">

      <nav class="slideshow-nav">
        <button onClick={prev}>&lt;</button>
        <div class="slides">
          {slides.map((slide, i) => (
            <div
            class={`slide ${i === index ? "current-slide" : ""}`}
            style={{ display: i === index ? "block" : "none" }}
            >
              <img class="goban" src={slide.src} loading="lazy" alt={slide.alt} />
              <p>{slide.text}</p>
            </div>
          ))}
        </div>
        <button onClick={next}>&gt;</button>
      </nav>
      <span class="subtle">{index + 1}</span>
    </div>
  );
}