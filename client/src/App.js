import "./App.css";

function App() {
  const patterns = [
    {
      pattern: ["🏃", "🌧️"],
      templates: ["{person} ran from the rain", "Quick dash through the storm"],
    },
    {
      pattern: ["🐱", "🐟"],
      templates: [
        "The cat spotted its favorite meal",
        "Feline fishing adventures",
      ],
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <div>
          {patterns.map(() => {
            return (
              <div>
                <div>
                  {patterns[0].pattern.map((emoji) => {
                    return <span>{emoji}</span>;
                  })}
                </div>
                <div>
                  {patterns[0].templates.map((template) => {
                    return <span>{template}</span>;
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </header>
    </div>
  );
}

export default App;
