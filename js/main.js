/* global $ hljs window */
$(document).ready(e => {
  // press h goto home
  listenKeys()
  // add Responsive Image to `img` tag
  $('img').addClass('img-fluid')
  $('table').addClass('table table-hover table-sm')
  $('thead').addClass('thead-dark')
  // Enable HighlightJS
  $('pre code').each(function (i, block) {
    hljs.highlightBlock(block)
  })
  // Hidden navbar when scroll down, will show when scroll up
  let previousScroll = 0
  $(window).scroll(function () {
    let currentScroll = $(this).scrollTop()
    if (currentScroll > 0 && currentScroll < $(document).height() - $(window).height()) {
      const $status = $("[data-nav-status='toggle']")
      if (currentScroll > previousScroll) {
        window.setTimeout(function () {
          $status.removeClass('is-visible').addClass('is-hidden')
        }, 300)
      } else {
        window.setTimeout(function () {
          $status.removeClass('is-hidden').addClass('is-visible')
        }, 300)
      }
      previousScroll = currentScroll
    }
  })
})

function listenKeys () {
  $(document).on('keydown', event => {
    const {keyCode, which} = event
    natvigateList(keyCode || which, event)
  })
}

function natvigateList (keyCode, event) {
  // console.log(keyCode)
  let $active = $('div.active')
  let $list = $('.list-group-item')
  const onFocus = $('#search-box').is(':focus')
  const searchBox = $('#search-box')
  const isDisabled = searchBox.prop('disabled')

  switch (true) {
    /*
      case (keyCode === 221 && !onFocus): // ]
      // TODO: Next Category
        break
      case (keyCode === 219 && !onFocus): // [
      // TODO: Previous Category
        break
      case (keyCode === 78 && !onFocus): // n
      // TODO: Next Page
        break
      case (keyCode === 80 && !onFocus): // p
      // TODO: Previous Page
        break
    */
    case (keyCode === 81 && !onFocus): // q
      window.location.href = '/'
      break
    case (keyCode === 74): // j
      toggleActive($active)
      const $next = $active.next()
      toggleActive($next)

      if ($next.length === 0) {
        toggleActive($list.eq(0))
      }
      break
    case (keyCode === 75): // k
      toggleActive($active)
      const $prev = $active.prev()
      toggleActive($prev)

      if ($prev.length === 0) {
        toggleActive($list.eq(-1))
      }
      break
    case (keyCode === 191 && !onFocus): // "/"
      event.preventDefault()
      if (isDisabled) {
        searchBox.prop('disabled', false)
        searchBox.focus()
      }
      break
    case (keyCode === 13 && !onFocus): // enter
      const link = $('.list-group-item.active a').attr('href')
      if (link) {
        window.location.href = link
      }
      break
    case (keyCode === 13): // enter
      event.preventDefault()
      if (!isDisabled) {
        searchBox.prop('disabled', true)
      }
      break
    default:
  }
}

function toggleActive (el) {
  el.toggleClass('active')

  const arr = [{
    from: '.text-muted, .text-light',
    to: 'text-muted text-light'
  }, {
    from: 'text-muted text-light',
    to: '.text-muted, .text-light'
  }]

  arr.forEach(({from, to}) => {
    el.find(from).toggleClass(to)
  })
}
