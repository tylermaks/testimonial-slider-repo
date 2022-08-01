import './App.css';

function App() {
  return (
    <div className="App">
      <section id="image-container">
        <img className="testimonial-img" src="images/image-tanya.jpg" alt="Testimonial Profile"/>
        <div className="btn-container">
          <img id="previous" className="btn" src="images/icon-prev.svg" alt="Previous Button"/>
          <img id="next" className="btn" src="images/icon-next.svg" alt="Next Button"/>
        </div>
      </section>
      <section id="testimonial-container">
        <p>
          “ I’ve been interested in coding for a while but never taken the jump, until now. 
          I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
          excited about the future. ”
        </p>
        <span className="name">Tanya Sinclair</span>
        <span className="title">UX Designer</span>
      </section>
    </div>
  );
}

export default App;
