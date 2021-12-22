import moxios from 'moxios';
import {getSecretWord} from './index';

describe('get secretword',()=>{
    beforeEach(()=>{
        moxios.install(); // tells axios to use moxios
    })
    afterEach(()=>{
        moxios.uninstall();
    })
    test('secretword is returned',()=>{
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
              status: 200,
              response: "party",
            });
          });
          // update to test app in Redux / context sections
          return getSecretWord().then((secretWord) => {
            console.log(`At line 24 secretWord: ${secretWord}`);
            expect(secretWord).toBe("party");
            });
    });
});