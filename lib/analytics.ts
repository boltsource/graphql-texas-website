import ga, { EventArgs } from 'react-ga'

const shouldLog = () => process.env.NODE_ENV !== 'development'

const init = () => {
  ga.initialize(process.env.NEXT_PUBLIC_GA_TRACKING_CODE as string)
}

const logPageView = () => {
  if (!shouldLog()) return

  setTimeout(() => {
    const url = window.location.pathname
    const { title } = document
    ga.set({ url, title })
    ga.pageview(url, [], title)
    console.log('log!')
  }, 0)
}

type EventExtra = Pick<
  EventArgs,
  'label' | 'value' | 'nonInteraction' | 'transport'
>

const logEvent = (category: string, action: string, extra: EventExtra) => {
  if (!shouldLog()) return

  ga.event({ category, action, ...extra })
}

const logException = (description = '', fatal = false) => {
  if (!shouldLog()) return

  if (description) {
    ga.exception({ description, fatal })
  }
}

const analytics = {
  init,
  logPageView,
  logEvent,
  logException,
}

export default analytics
