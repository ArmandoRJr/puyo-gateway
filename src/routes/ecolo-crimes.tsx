export default function EcoloCrimes () {
  const contact = {
    first: 'Ecolo',
    last: '?????',
    avatar: 'https://www.models-resource.com/resources/big_icons/30/29930.png?updated=1559857556',
    twitter: '@ecolo_shitposts',
    notes: "He's deadass just blue Play-doh",
    favorite: true,
  }

  return (
    <div id='contact'>
      <div>
        <img key={contact.avatar} src={contact.avatar} />
      </div>

      <div>
        <h1>
          {
            contact.first || contact.last
              ? <>{contact.first} {contact.last}</>
              : <i>All the names</i>
          }
        </h1>

        {
          contact.twitter && (
            <p>
              <a target='_blank' rel='noreferrer' href={`https://twitter.com/${contact.twitter}`}>
                {contact.twitter}
              </a>
            </p>
          )
        }

        {contact.notes && <p>{contact.notes}</p>}
      </div>
    </div>
  )
}
