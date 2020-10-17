import Furniture from '../../models/furniture.model'

export const genEmail = (email: string, furniture: Furniture): any => (
  {
    from: 'adrison.gomez@hotmail.com',
    to: email,
    subject: `Request more info about ${furniture.name} by ${furniture.vendor.name}`,
    html: `
        <div>
            <h1>${furniture.name}</h1>
            <div styles="display: flex;">
                by <b>${furniture.vendor.name}</b>
            </div>
            <h3>description</h3>
            <p> ${furniture.description} </p>
        </div>
      `
  })
