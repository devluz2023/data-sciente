/*
 *  Copyright 2024 Curity AB
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

import {parseMainError} from './errorUtil';

/*
 * A generic routine to call the main side of the app for a named operation with request data
 * The app receives an object response or an object error responses
 */
export async function ipcRequest(name: string, requestData: any = {}): Promise<any> {

    const result = await (window as any).api.sendMessage(name, requestData);
    if (result.error) {
        throw parseMainError(result.error);
    } else {
        return result.data;
    }
}
