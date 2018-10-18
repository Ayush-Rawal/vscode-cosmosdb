/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { RecognitionException } from 'antlr4ts';
import * as vscode from 'vscode';

export interface MongoCommand {
    range: vscode.Range;
    text: string;
    collection?: string;
    name?: string;
    // tslint:disable-next-line:no-banned-terms
    arguments?: string[];
    argumentObjects?: Object[];
    errors?: ErrorDescription[];
    chained?: boolean;
}

export interface ErrorDescription {
    range: vscode.Range;
    message: string;
    exception?: RecognitionException;
}
