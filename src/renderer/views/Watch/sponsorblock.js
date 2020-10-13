import $ from 'jquery'

function getSkipSegments(videoID, categories) {
  return new Promise((resolve, reject) => {
    const requestUrl = 'https://sponsor.ajay.app' + '/api/skipSegments';
    $.getJSON(requestUrl, {videoID: videoID, categories: categories}, (response) => {
      resolve(response)
    }).fail((xhr, textStatus, error) => {
      if (xhr.status == 404)
      {
        resolve([]);
      }
      else
      {
        console.log(xhr)
        console.log(textStatus)
        console.log(requestUrl)
        console.log(error)
        reject(xhr)
      }
    })
  })
}

export {
  getSkipSegments
}

