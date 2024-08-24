"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ask_A_Validator_Recursible_Question_And_Return_The_Good_UserInput = void 0;
const readline = __importStar(require("readline"));
const f_MyReadLine_Interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
//--------------------------------------------------------------------------------------------------------
function ask_A_Validator_Recursible_Question_And_Return_The_Good_UserInput(p_the_Question, p_validate__IsThe_UserInput_Good, p_Function_ToBe_Executed_When_The_UserInput_Is_Bad, p_function_ToBe_Executed_When_The_UserInput_Is_Good, p_should_I_Close_The_Interface_After_Getting_The_Good_Answer, p_a_ReadLine_Interface = f_MyReadLine_Interface) {
    return __awaiter(this, void 0, void 0, function* () {
        const the_Good_UserInput = yield new Promise((res) => {
            p_a_ReadLine_Interface.question(p_the_Question, (c_the_UserInput) => __awaiter(this, void 0, void 0, function* () {
                console.log("\x1b[0m");
                let the_Good_UserInput;
                //NOTE:- The not needed await here are for the situation if the caller passed async functions
                if (yield p_validate__IsThe_UserInput_Good(c_the_UserInput)) {
                    yield p_function_ToBe_Executed_When_The_UserInput_Is_Good(c_the_UserInput);
                    the_Good_UserInput = c_the_UserInput;
                }
                else {
                    yield p_Function_ToBe_Executed_When_The_UserInput_Is_Bad(c_the_UserInput);
                    the_Good_UserInput =
                        yield ask_A_Validator_Recursible_Question_And_Return_The_Good_UserInput(p_the_Question, p_validate__IsThe_UserInput_Good, p_Function_ToBe_Executed_When_The_UserInput_Is_Bad, p_function_ToBe_Executed_When_The_UserInput_Is_Good, p_should_I_Close_The_Interface_After_Getting_The_Good_Answer, p_a_ReadLine_Interface);
                }
                res(the_Good_UserInput);
            }));
        });
        if (p_should_I_Close_The_Interface_After_Getting_The_Good_Answer) {
            p_a_ReadLine_Interface.close();
        }
        return the_Good_UserInput;
    });
}
exports.ask_A_Validator_Recursible_Question_And_Return_The_Good_UserInput = ask_A_Validator_Recursible_Question_And_Return_The_Good_UserInput;
//--------------------------------------------------------------------------------------------------------
