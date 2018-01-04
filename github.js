class Github{
  constructor() {
    this.client_id = '2e7e8ac951dfebb9d8d2';//need to set up account for this
    this.client_secret = 'e06d9044f66045d3160b0c7433199f86b0ec5fa2';
  }
  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    return{
      profile
    }
  }
}

