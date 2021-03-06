import { FileParser } from "@atomist/automation-client/tree/ast/FileParser";
import { AntlrFileParser } from "../AntlrFileParser";
import { KotlinLexer } from "./antlr-gen/KotlinLexer";
import { KotlinParser } from "./antlr-gen/KotlinParser";

/**
 * Glob pattern for Kotlin source
 * @type {string}
 */
export const KotlinFiles = "**/*.kt";

export const KotlinFileParser: FileParser =
    new AntlrFileParser("kotlinFile", KotlinLexer, KotlinParser);

export const KotlinScriptParser: FileParser =
    new AntlrFileParser("script", KotlinLexer, KotlinParser);
