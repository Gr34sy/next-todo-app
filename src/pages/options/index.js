function OptionsPage() {
  function colorThemeHandler(e) {
    e.preventDefault();
    document.body.className = "";
    document.body.classList.add(e.target.dataset.value);
  }

  return (
    <section className="section options">
      <h1>Options Page</h1>
      <div>
        <button className="custom-link" data-value="default" onClick={colorThemeHandler}>Default</button>

        <button className="custom-link" data-value="celestial-blue" onClick={colorThemeHandler}>Celestial Blue</button>

        <button className="custom-link" data-value="midnight-green" onClick={colorThemeHandler}>Midnight Green</button>

        <button className="custom-link" data-value="nightmode" onClick={colorThemeHandler}>Nightmode</button>

        <button className="custom-link" data-value="pinky" onClick={colorThemeHandler}>Pinky</button>

        <button className="custom-link" data-value="orange" onClick={colorThemeHandler}>Orange</button>

        <button className="custom-link" data-value="tiffany-blue" onClick={colorThemeHandler}>Tiffany Blue</button>
      </div>
    </section>
  );
}

export default OptionsPage;
