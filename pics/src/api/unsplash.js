import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID webFBUIiv9SA4Uu5mgaAhLhTc9rzPME24q-M6Z03oTU'
    }
})
