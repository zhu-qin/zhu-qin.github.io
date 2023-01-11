// components
import EddieView from './intro/intro_view.jsx'
import BlocksView from './tetris/tetris_view.jsx'
import InvadersView from './space_invaders_game/space_invaders_view'
import AppView from './sample_app/sample_app_view.jsx'
import ContactView from './contact/contact_view.jsx'

const Views = {
  'Eddie': ContactView,
  'Invaders': InvadersView,
  'App': AppView,
  'Blocks': BlocksView,
  'Contact': EddieView,
}

export default Views
