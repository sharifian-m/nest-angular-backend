import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  getHello(): { response: any } {
    return {response:'Hello World!!!!!!!!'};
  }
}
