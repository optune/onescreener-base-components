/* 
 * Map smart links
 */

const SmartLinks = {
  OPTUNEARTISTPROFILE: '/profile',
  OPTUNEBOOKINGS: '/events',
  OPTUNEREQUESTFORM: '/request',
  OPTUNENEWSLETTER: '/newsletter',
}

export const mapSmartLinks = pageUrl => link => {
  let mappedLink = { ...link }

  // TODO: Activate once the public pages are tested on the live system 
  /* if (pageUrl > '' && Object.keys(SmartLinks).includes(link.platform)) {
    const queryParams = link.url?.split('?') || []
    const querySeparator = pageUrl.includes('?') ? '&' : '?'
    const query = queryParams.length > 1 ? `${querySeparator}${queryParams[1]}` : ''
    mappedLink.url = `${pageUrl || ''}${SmartLinks[link.platform]}${query}`
    mappedLink.target = '_self'
  } */
  
  return mappedLink
}
