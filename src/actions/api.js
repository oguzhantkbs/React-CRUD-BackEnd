import axios from 'axios';

const baseUrl = "http://localhost:52187/api/";

export default {
    dCandidate(url = baseUrl + 'DCandidates/') {
        return {
            fetchAll: () => axios.get(url),
            fetchById: id => axios.get(url + id),
            create: newRecord => axios.post(url , newRecord),
            update: (id, updeteRecord) => axios.put(url + id, updeteRecord),
            delete: id => axios.delete(url + id)
        }
    }
}