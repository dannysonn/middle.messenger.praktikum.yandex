export const queryStringify = (data: any) => `?${Object.keys(data).map((key) => `${key}=${data[key]}`).join('&')}`;
