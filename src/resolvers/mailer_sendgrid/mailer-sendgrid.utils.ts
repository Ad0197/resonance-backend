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
            <h3>Description</h3>
            <p> ${furniture.description} </p>
            <h3> Images </h3>
            ${furniture.picture.map((img) => `<img src="${img.url}" alt="${furniture.name}"/>`).toString().replace('[', '').replace(']', '').replace(',', '')}
        </div>
      `
  })
