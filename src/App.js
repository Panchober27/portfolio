const styles = {
  iframeframe: {
    pointerEvents: "none",
    tabIndex: -1,
  },
};



function App() {
  return (
    <div>
        <h2>New Portfolio!</h2>

        <p>
          Hi im working on my new portfolio. I will be including new features to
          it soon.
        </p>
        
        <div style={styles.iframeframe}>
          <iframe
            src="https://giphy.com/embed/dXavF0qnux9vNtNHfc"
            width="480"
            height="366"
            frameBorder="0"
            class="giphy-embed"
            allowFullScreen
          ></iframe>
        </div>
    </div>
  );
}

export default App;
