export class Country {
  Id: number;
  Name: string;
}

export class SimCountriesWithCategory {
  IsInternational: boolean;
  IsAmerican: boolean;
  IsOneSimForLive: boolean;
  Id: number;
  Name: string;
}

export class SimPackages {
  Countries: number[];
  TotalDays: number;
}

export class PackagesResponse {
  Name: string;
  Type: string;
  PackagePrice: number;
  SimPrice: number;
  DaysExpired: number;
  Details: string[];
  Description: string;
}

