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
exports.does_It_Exist = void 0;
const fsPromises = __importStar(require("fs/promises"));
const path = __importStar(require("path"));
const Console_Questions_1_1 = require("./Console_Questions_Handler/Console_Questions_1");
//------------------------------------------
const the_Local_Path_OfThe_Guide_File_InThis_Local_Repo = path.join(__dirname, "../The_Guide_File_For_Downloading_The_Posts_Data-Files.json");
// console.log("---------------------------------------------------------");
// console.log("the_Local_Path_OfThe_Guide_File_InThis_Local_Repo = ");
// console.log(the_Local_Path_OfThe_Guide_File_InThis_Local_Repo);
// console.log("---------------------------------------------------------");
//---------------
const forThe_Images___The_Local_Path_ToBe_Replaced_With_The_Github_Path = path.join(__dirname, "../The_Posts");
const forThe_Images___The_Github_Path_ToBe_Used_Instead_The_Local_Path = "https://account_1.com/main/The_Posts";
//---------------
const forThe_Posts_Data_Files___The_Local_Path_ToBe_Replaced_With_The_Github_Path = path.join(__dirname, "../The_Data_Files");
const forThe_Posts_Data_Files___The_Github_Path_ToBe_Used_Instead_The_Local_Path = "https://raw.githubusercontent.com/A-M-Softwares/Tata_Brothers_Posts_Data/main/The_Data_Files";
//---------------
//-------------------------------------------------------------------------------------------------------------
(0, Console_Questions_1_1.ask_A_Validator_Recursible_Question_And_Return_The_Good_UserInput)("Please, enter the path of the target folder :\n", (user_input) => __awaiter(void 0, void 0, void 0, function* () {
    return true;
}), (user_input) => __awaiter(void 0, void 0, void 0, function* () {
    const red = "\x1b[41m"; // Red background
    const reset = "\x1b[0m";
    console.log(red + "----------------------------------------" + reset);
    console.log(red + "My_Errors:" + reset);
    console.log(red + "Your input is bad" + reset);
    console.log(red + "----------------------------------------" + reset);
}), (user_input) => __awaiter(void 0, void 0, void 0, function* () {
    main(user_input);
}), true).then(() => {
    console.log("The End");
});
//-------------------------------------------------------------------------------------------------------------
function main(the_Sanitized_Path_OfThe_TargetFolder_ToBe_Scanned) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            //----------------------------------
            const the_Full__ObjOf_DataObjs_Of_Posts = yield scan_A_Folder_And_Give_MeThe_Full__ObjOf_DataObjs_Of_Posts__Of_It(the_Sanitized_Path_OfThe_TargetFolder_ToBe_Scanned);
            //----------------------------------
            const the_Name_OfThe_ToBe_Created_Data_File = the_Sanitized_Path_OfThe_TargetFolder_ToBe_Scanned
                .replace(path.dirname(the_Sanitized_Path_OfThe_TargetFolder_ToBe_Scanned), "")
                .replace(/[\/\\]/gi, "");
            try {
                //----------------------------------
                const the_Full_Local_Path_OfThe_ToBe_Created_Date_File = path.join(__dirname, "../The_Data_Files", the_Name_OfThe_ToBe_Created_Data_File + ".json");
                //----------------------------------
                yield fsPromises.writeFile(the_Full_Local_Path_OfThe_ToBe_Created_Date_File, JSON.stringify(the_Full__ObjOf_DataObjs_Of_Posts), "utf-8");
                //----------------------------------
                const the_Old_Content_OfThe_Guide_File = yield fsPromises.readFile(the_Local_Path_OfThe_Guide_File_InThis_Local_Repo, "utf-8");
                if (the_Old_Content_OfThe_Guide_File) {
                    // do nothing for now.
                }
                else {
                    throw new Error(" Error_2: The content of the guide file in this local repo is empty or undefined");
                }
                //----------------------------------
                const the_Old_Obj_OfThe__Guide_File = JSON.parse(the_Old_Content_OfThe_Guide_File);
                if (the_Old_Obj_OfThe__Guide_File) {
                    // do nothing for now.
                }
                else {
                    throw new Error(" Error_3: The obj of the guide file in this local repo is empty or undefined");
                }
                //----------------------------------
                const arr_OfThe_Posts_Data_Objs = Object.values(the_Full__ObjOf_DataObjs_Of_Posts);
                arr_OfThe_Posts_Data_Objs.sort((obj_1, obj_2) => {
                    return obj_1.number_OfThis_Post - obj_2.number_OfThis_Post;
                });
                if (arr_OfThe_Posts_Data_Objs == undefined || arr_OfThe_Posts_Data_Objs.length < 1) {
                    throw new Error(" Error_4: arr_OfThe_Posts_Data_Objs is undefined or empty");
                }
                const the_Url_OfThis_Posts_Data_File = the_Full_Local_Path_OfThe_ToBe_Created_Date_File
                    .replace(forThe_Posts_Data_Files___The_Local_Path_ToBe_Replaced_With_The_Github_Path, forThe_Posts_Data_Files___The_Github_Path_ToBe_Used_Instead_The_Local_Path)
                    .replace(/\\+/gi, "/");
                const new_SubGuidObj_For_Downloading_The_Posts_Data_Files = {
                    the_Start_Number_OfThis_Range_Of_Posts: arr_OfThe_Posts_Data_Objs[0].number_OfThis_Post,
                    the_End_Number_OfThis_Range_Of_Posts: arr_OfThe_Posts_Data_Objs[arr_OfThe_Posts_Data_Objs.length - 1]
                        .number_OfThis_Post,
                    the_Url_OfThis_Posts_Data_File,
                };
                //----------------------------------
                the_Old_Obj_OfThe__Guide_File[the_Name_OfThe_ToBe_Created_Data_File] =
                    new_SubGuidObj_For_Downloading_The_Posts_Data_Files;
                //----------------------------------
                yield fsPromises.writeFile(the_Local_Path_OfThe_Guide_File_InThis_Local_Repo, JSON.stringify(the_Old_Obj_OfThe__Guide_File), "utf-8");
                const green = "\x1b[32m"; // Green background
                const reset = "\x1b[0m";
                console.log(green + "----------------------------------------" + reset);
                console.log(green + "Finished Successfully filling the github json files" + reset);
                console.log(green + "----------------------------------------" + reset);
                //----------------------------------
            }
            catch (err) {
                const red = "\x1b[41m"; // Red background
                const reset = "\x1b[0m";
                console.log(red + "----------------------------------------" + reset);
                console.log(red + "My_Errors:" + reset);
                console.log(red + err.message + reset);
                console.log();
                console.log(red + err.stack + reset);
                console.log(red + "----------------------------------------" + reset);
            }
        }
        catch (err) {
            const red = "\x1b[41m"; // Red background
            const reset = "\x1b[0m";
            console.log(red + "----------------------------------------" + reset);
            console.log(red + "My_Errors:" + reset);
            console.log(red + err.message + reset);
            console.log();
            console.log(red + err.stack + reset);
            console.log(red + "----------------------------------------" + reset);
        }
    });
}
//-------------------------------------------------------------------------------------------------------------
function scan_A_Folder_And_Give_MeThe_Full__ObjOf_DataObjs_Of_Posts__Of_It(p_the_Sanitized_Path_OfThe_TargetFolder_ToBe_Scanned) {
    return __awaiter(this, void 0, void 0, function* () {
        //---------------------------------------------
        const the_Final_Composed__ObjOf_DataObjs_Of_Posts = {};
        //---------------------------------------
        yield $_loop_Inside_The__TargetFolder__And_Fill_The_Combined_Obj(p_the_Sanitized_Path_OfThe_TargetFolder_ToBe_Scanned);
        //---------------------------------------
        //Warning: the following step is excellent when the provider extensions are not installed yet.
        if (Object.values(the_Final_Composed__ObjOf_DataObjs_Of_Posts).length < 1) {
            return {};
        }
        //---------------------------------------
        return the_Final_Composed__ObjOf_DataObjs_Of_Posts;
        //---------------------------------------------------------------
        function $_loop_Inside_The__TargetFolder__And_Fill_The_Combined_Obj(p_the_Folder_Path) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const arrOfThe_Dirents = yield fsPromises.readdir(p_the_Folder_Path, {
                        withFileTypes: true,
                    });
                    for (let i = 0; i < arrOfThe_Dirents.length; i++) {
                        const i_Dirent = arrOfThe_Dirents[i];
                        const the_Full_Absolute_Path_OfThe__i_Dirent = path.join(p_the_Folder_Path, i_Dirent.name);
                        if (i_Dirent.isDirectory()) {
                            yield $_loop_Inside_The__TargetFolder__And_Fill_The_Combined_Obj(the_Full_Absolute_Path_OfThe__i_Dirent);
                        }
                        else {
                            const the_Github_Path_OfThe_Image = the_Full_Absolute_Path_OfThe__i_Dirent
                                .replace(forThe_Images___The_Local_Path_ToBe_Replaced_With_The_Github_Path, forThe_Images___The_Github_Path_ToBe_Used_Instead_The_Local_Path)
                                .replace(/\\+/gi, "/");
                            const the_DataObj_Of__i_Dirent = yield compose_A_DataObj_For_A_Post__From_An_Image_Data__Remember_It_Will_Only_Have_PC_Paths_Not_Stringified_Webview_Uris(the_Github_Path_OfThe_Image, i_Dirent.name);
                            if (the_DataObj_Of__i_Dirent == undefined) {
                                continue;
                            }
                            insert_The_Data_Of__OnePostDataObj__To_An___ObjOf_DataObjs_Of_Multiple_Posts(the_Final_Composed__ObjOf_DataObjs_Of_Posts, the_DataObj_Of__i_Dirent);
                        }
                    }
                    return true;
                }
                catch (err) {
                    return false;
                }
            });
        }
    });
}
//-------------------------------------------------------------------------------------------------------------
function compose_A_DataObj_For_A_Post__From_An_Image_Data__Remember_It_Will_Only_Have_PC_Paths_Not_Stringified_Webview_Uris(the_Github_Path_OfThe_Image, the_Image_Name_With_Its_Type) {
    var _a, _b, _c;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const the_Wanted_String_From_The_Image_Name = (_a = the_Image_Name_With_Its_Type.match(/post_No_.+?\./gi)) === null || _a === void 0 ? void 0 : _a[0];
            if (the_Wanted_String_From_The_Image_Name == undefined) {
                return undefined;
            }
            let is_This_Image_ForThe_Answer = false;
            if (the_Wanted_String_From_The_Image_Name.includes("Answer")) {
                is_This_Image_ForThe_Answer = true;
            }
            const just_The_Post_Word_And_Its_Number = (_b = the_Wanted_String_From_The_Image_Name.match(/post_No_\d+?_/gi)) === null || _b === void 0 ? void 0 : _b[0];
            if (just_The_Post_Word_And_Its_Number == undefined) {
                return undefined;
            }
            const the_Stringified_Number_OfThe_Post = (_c = just_The_Post_Word_And_Its_Number.match(/\d+/gi)) === null || _c === void 0 ? void 0 : _c[0];
            if (the_Stringified_Number_OfThe_Post == undefined) {
                return undefined;
            }
            const the_Number_OfThe_Post_From_The_Image_Name = Number.parseInt(the_Stringified_Number_OfThe_Post);
            const temp_Obj = {
                name_OfThis_Post: `post_No_${the_Number_OfThe_Post_From_The_Image_Name}`,
                number_OfThis_Post: the_Number_OfThe_Post_From_The_Image_Name,
                the_Relative_Path_OfThe_Top_Post_From_The_PC__V1: null,
                the_Url_OfThe_Top_Post_From_Internet_Site_1: null,
                the_Url_OfThe_Top_Post_From_Internet_Site_2: null,
                is_There_A_Bottom_Post: false,
                the_Relative_Path_OfThe_Bottom_Post_From_The_PC__V1: null,
                the_Url_OfThe_Bottom_Post_From_Internet_Site_1: null,
                the_Url_OfThe_Bottom_Post_From_Internet_Site_2: null,
                the_TextContent_OfThe_Button_Show_Bottom_Post: null,
            };
            if (is_This_Image_ForThe_Answer == true) {
                temp_Obj.is_There_A_Bottom_Post = true;
                temp_Obj.the_TextContent_OfThe_Button_Show_Bottom_Post = "Show The Answer";
                temp_Obj.the_Url_OfThe_Bottom_Post_From_Internet_Site_1 = the_Github_Path_OfThe_Image;
            }
            else {
                temp_Obj.the_Url_OfThe_Top_Post_From_Internet_Site_1 = the_Github_Path_OfThe_Image;
            }
            return temp_Obj;
        }
        catch (err) {
            return undefined;
        }
    });
}
//-------------------------------------------------------------------------------------------------------------
function insert_The_Data_Of__OnePostDataObj__To_An___ObjOf_DataObjs_Of_Multiple_Posts(p_the_ObjOf_DataObjs_Of_Multiple_Posts, p_the_DataObj_Of_One_Post) {
    try {
        //-----------------------------------
        if (Object.values(p_the_ObjOf_DataObjs_Of_Multiple_Posts).length == 0) {
            p_the_ObjOf_DataObjs_Of_Multiple_Posts[p_the_DataObj_Of_One_Post.name_OfThis_Post] =
                p_the_DataObj_Of_One_Post;
            return true;
        }
        //-----------------------------------
        let do_The_Single_Obj_Exist_InThe__ObjOf_Multiple_Objs = false;
        const temp_1___Arr_Of__i__keys = Object.keys(p_the_ObjOf_DataObjs_Of_Multiple_Posts);
        for (let i_key of temp_1___Arr_Of__i__keys) {
            //-------------------
            if (p_the_ObjOf_DataObjs_Of_Multiple_Posts[i_key].number_OfThis_Post !=
                p_the_DataObj_Of_One_Post.number_OfThis_Post) {
                continue;
            }
            //-------------------
            do_The_Single_Obj_Exist_InThe__ObjOf_Multiple_Objs = true;
            const temp_2___Arr_Of__k__Keys = Object.keys(p_the_DataObj_Of_One_Post);
            for (let k = 0; k < temp_2___Arr_Of__k__Keys.length; k++) {
                const k_Key = temp_2___Arr_Of__k__Keys[k];
                const k_Value = p_the_DataObj_Of_One_Post[k_Key];
                // only assign the i_value if it exist not (empty or null or ...etc), to avoid rewrite an existing value.
                if (k_Value) {
                    p_the_ObjOf_DataObjs_Of_Multiple_Posts[i_key][`${k_Key}`] = k_Value;
                    continue;
                }
                // I excluded the following conditions from the previous "Existence" condition because their values (0 or false) will be considered not exist
                if (
                // I didn't check for string because I want if the string is empty ==> not be added.
                typeof k_Value == "number" ||
                    typeof k_Value == "bigint" ||
                    typeof k_Value == "boolean") {
                    p_the_ObjOf_DataObjs_Of_Multiple_Posts[i_key][`${k_Key}`] = k_Value;
                    continue;
                }
            }
            break;
            //-------------------
        }
        //-----------------------------------
        if (do_The_Single_Obj_Exist_InThe__ObjOf_Multiple_Objs == false) {
            p_the_ObjOf_DataObjs_Of_Multiple_Posts[p_the_DataObj_Of_One_Post.name_OfThis_Post] =
                p_the_DataObj_Of_One_Post;
        }
        //-----------------------------------
        return true;
    }
    catch (err) {
        return false;
    }
}
//-------------------------------------------------------------------------------------------------------------
function does_It_Exist(thePath) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield fsPromises.stat(thePath);
            return true;
        }
        catch (err) {
            return false;
        }
    });
}
exports.does_It_Exist = does_It_Exist;
//-------------------------------------------------------------------------------------------------------------
