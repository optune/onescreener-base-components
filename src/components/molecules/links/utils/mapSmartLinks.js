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

  if (Object.keys(SmartLinks).includes(link.platform)) {
    mappedLink.target = '_self'

    if (pageUrl > '' && !link.url.includes('page=')) {
      const queryParams = link.url?.split('?') || []
      const querySeparator = pageUrl.includes('?') ? '&' : '?'
      const query = queryParams.length > 1 ? `${querySeparator}${queryParams[1]}` : ''
      mappedLink.url = `${pageUrl || ''}${SmartLinks[link.platform]}${query}`
    }
  }

  return mappedLink
}
