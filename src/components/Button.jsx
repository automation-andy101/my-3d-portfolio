
const Button = ({ text, className, id }) => {
  return (
    <a 
    onClick={(e) => {
      e.preventDefault();

      const target = document.getElementById('counter');

      // Only scroll if we found the section and an ID is passed in
      // that prevents the contact button from scrolling to the top
      if (target && id) {
        const offset = window.innerHeight * 0.15; // Leave a bit of space at the top

        // Calculate how far down the page we need to scroll
        const top = target.getBoundingClientRect().top + window.scrollY - offset;

        window.scrollTo( { top, behaviour: 'smooth' })
      }
    }}
      className={`${className ?? ''} cta-wrapper`}
    >
        <div className="cta-button group">
          <div className="bg-circle" />
          <p className="text">{text}</p>
          <div className="arrow-wrapper">
            <img src="/images/arrow-down.svg" alt="arrow" />
          </div>
        </div>
    </a>
  )
}

export default Button