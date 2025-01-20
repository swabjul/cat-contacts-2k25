export default function Contacts() {
  return (
    <div className="contacts">
      <article className="contacts--card">
        <img className="contacts--photo" src="/src/images/mr-whiskerson.png" alt="whiskerson photo" />
        <h3 className="contacts--name">Mr. Whiskerson</h3>
        <div className="contacts--info">
          <p className="icon icon-number">(212) 555-1234</p>
          <p className="icon icon-email">mr.whiskaz@catnap.meow</p>
        </div>
      </article>
      <article className="contacts--card">
        <img className="contacts--photo" src="/src/images/fluffykins.png" alt="fluffykins photo" />
        <h3 className="contacts--name">Fluffykins</h3>
        <div className="contacts--info">
          <p className="icon icon-number">(212) 555-2345</p>
          <p className="icon icon-email">fluff@me.com</p>
        </div>
      </article>
      <article className="contacts--card">
        <img className="contacts--photo" src="/src/images/felix.png" alt="felix photo" />
        <h3 className="contacts--name">Felix</h3>
        <div className="contacts--info">
          <p className="icon icon-number">(212) 555-4567</p>
          <p className="icon icon-email">thecat@hotmail.com</p>
        </div>
      </article>
      <article className="contacts--card">
        <img className="contacts--photo" src="/src/images/pumpkin.png" alt="pumpkin photo" />
        <h3 className="contacts--name">Pumpkin</h3>
        <div className="contacts--info">
          <p className="icon icon-number">(0800) CAT KING</p>
          <p className="icon icon-email">pumpkin@scrimba.com</p>
        </div>
      </article>
    </div>





  )
}