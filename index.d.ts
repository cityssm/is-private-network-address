import * as requestIP from "request-ip";
export declare type IPAddressSource = string | requestIP.Request;
export declare const isLocal: (ipAddressSource: IPAddressSource) => boolean;
export declare const isPrivate: (ipAddressSource: IPAddressSource) => boolean;
