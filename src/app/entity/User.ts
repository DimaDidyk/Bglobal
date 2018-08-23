export class UserDataLead{
    Email: string;
    FirstName: string;
    LastName: string;
    Phone: string;
    Message: string;
    Affiliate: string;
}

export class UserDataRegister{
    Email: string;
    Password: string;
    ConfirmPassword: string; 
    FirstName: string;
    LastName: string;
    Phone: string;
    Prefix: string;
    Affiliate: string;
    AllowSendMail: boolean;
}

export class ClosestPickUpPoints{
    City: string;
    Street: string;
    Building: string;
}
