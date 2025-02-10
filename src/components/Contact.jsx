export default function Contacts({img, name, phone, email}) {
  // const {img, name, phone, email} = props;
  return (
      <article className="contacts--card">
        <img className="contacts--photo" src={img} alt={`Photo of ${name}`} />
        <h3 className="contacts--name">{name}</h3>
        <div className="contacts--info">
          <p className="icon icon-number">{phone}</p>
          <p className="icon icon-email">{email}</p>
        </div>
      </article>
  )
}