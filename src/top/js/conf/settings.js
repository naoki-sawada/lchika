export const settings = {
  clientID: 'CH001',
  socketio: {
    address: process.env.APP_ADDRESS ? `${process.env.APP_ADDRESS}:${process.env.PORT}` : 'http://localhost:5000'
  },
  defaltMusic: 'christmas.mp3'
}
