"use strict";

module.exports = {
  headerPattern: /^(?::(\w*): )?(?:(\w*)(?:\(([\w$.\-* ]*)\))?: )?(.*)$/,
  headerCorrespondence: ["emoji", "type", "scope", "subject"],
  noteKeywords: [`NOTE`],
  revertPattern: /^revert:\s([\s\S]*?)\s*This reverts commit (\w*)\./,
  revertCorrespondence: [`header`, `hash`]
};
