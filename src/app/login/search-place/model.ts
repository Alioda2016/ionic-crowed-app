export class CrowedInfo{
    $key: string;
    name: string;
    crowdPercentage: number
}

export class User{
    firstName: string;
    lastName: string;
    username: string;
    phoneNumber: string;
    password: string;
    maxCrowdPercentage: number;
}

export class MaxPercentage{
    key: string;
    maxCrowdPercentage: number;
}