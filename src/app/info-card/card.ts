export interface Card {
  title: string,
  body: string,
  icon: string,
}

export const cards: Card[] = [
  {
    title: 'Online Banking', 
    body: 'Our modern web and mobile applications allow you to keep track of your finances wherever ypu arre in the world', 
    icon: '../../assets/icon-online.svg',},
  {
    title: 'Simple Budgeting', 
    body: `See exactly where your money goes each month. Recive notifications when you're close to your hitting limits`, 
    icon: '../../assets/icon-budgeting.svg',},
  {
    title: 'Fast Onboarding', 
    body: `We don't do branches. Open your account in minutes online and start taking control of your finances right away`, 
    icon: '../../assets/icon-onboarding.svg',},
  {
    title: 'Open API', 
    body: `Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.`, 
    icon: '../../assets/icon-api.svg',}
]
