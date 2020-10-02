function App(props) {
  let albumId = props.albumId;
  let url = "http://open.spotify.com/embed/album/" + albumId;
  console.log(albumId)
  if (!albumId) {
    return <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>{props.status}</div>
      </header>
    </div>
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br />
        <iframe title="spotfy-widget" src={url} width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media">

        </iframe>
        <button>Previous</button>
        <button>Next</button>
      </header>
    </div>
  );
}
