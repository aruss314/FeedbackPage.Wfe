export const WinHistoryApi = {
        GetRecentVictoriesByPlayerName,
        GetWinHistoryRecord,
        PostPlayerNameAndPlayerScore,
        DeleteWinHistoryRecordById
}

const apiBaseUrl = "https://aruss-feedback-api.atriarch.systems/WinHistory";

async function GetWinHistoryRecord({ id }) {
        try {
                var url = apiBaseUrl + `/GetWinHistoryRecordById?id=${id}`;

                const response = await fetch(url, {
                        method: 'GET',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                                //'Authorization' : 'Bearer '+ access_token
                        }
                });
                if (response.ok === false) {
                        throw (new Error(`ERROR MESSAGE HERE: response.ok was ${response.ok}`));
                }
                const data = await response.json();
                return {
                        success: true,
                        data,
                        errors: null
                };
        }
        catch (e) {
                console.log(e.message);
                return {
                        success: false,
                        data: null,
                        errors: e.message
                };
        }

}

async function GetRecentVictoriesByPlayerName({ playerName, count }) {
        try {
                var url = apiBaseUrl + `/GetPageOfWinHistoryRecordsByPlayerName`;

                const response = await fetch(url, {
                        method: 'POST',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                                //'Authorization' : 'Bearer '+ access_token
                        },
                        body: JSON.stringify({
                                PageSize: count,
                                PageNumber: 0,
                                PlayerName: playerName
                        })
                });
                if (response.ok === false) {
                        throw (new Error(`ERROR MESSAGE HERE: response.ok was ${response.ok}`));
                }
                const { data, success } = await response.json();
                return {
                        success,
                        data,
                        errors: null
                };
        }
        catch (e) {
                console.log(e.message);
                return {
                        success: false,
                        data: null,
                        errors: e.message
                };
        }
}

async function PostPlayerNameAndPlayerScore({ playerName, playerScore }) {
        try {
                var url = apiBaseUrl + `/CreateWinHistoryRecord`;

                const response = await fetch(url, {
                        method: 'POST',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                                //'Authorization' : 'Bearer '+ access_token
                        },
                        body: JSON.stringify({
                                playerName: playerName,
                                playerScore: playerScore
                                /* Future Andy's problem: the { property: property } thing can be reduced to just {property} if ( property names are same) */
                        })
                });
                if (response.ok === false) {
                        throw (new Error(`ERROR MESSAGE HERE: response.ok was ${response.ok}`));
                }
                const { data, success } = await response.json();
                return {
                        success,
                        data,
                        errors: null
                };
        }
        catch (e) {
                console.log(e.message);
                return {
                        success: false,
                        data: null,
                        errors: e.message
                };
        }
}

async function DeleteWinHistoryRecordById({ winHistoryRecordId }) {
        try {
                var url = apiBaseUrl + `/DeleteWinHistoryRecordById`;

                const response = await fetch(url, {
                        method: 'DELETE',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                                //'Authorization' : 'Bearer '+ access_token
                        },
                        body: JSON.stringify({
                                winHistoryRecordId
                                /* Future Andy's problem: the { property: property } thing can be reduced to just {property} if ( property names are same) */
                        })
                });
                if (response.ok === false) {
                        throw (new Error(`ERROR MESSAGE HERE: response.ok was ${response.ok}`));
                }
                const { data, success } = await response.json();
                return {
                        success,
                        data,
                        errors: null
                };
        }
        catch (e) {
                console.log(e.message);
                return {
                        success: false,
                        data: null,
                        errors: e.message
                };
        }
}