// Generated by BUCKLESCRIPT VERSION 2.2.0, PLEASE EDIT WITH CARE
'use strict';

var Jest = require("@glennsl/bs-jest/lib/js/src/jest.js");
var Colors_Support = require("../src/Colors_Support.js");

describe("colors.re Colors_Support", (function () {
        Jest.test("supportsColors", (function () {
                return Jest.ExpectJs[/* toBe */2](3, Jest.ExpectJs[/* expect */0](Colors_Support.findMax(/* :: */[
                                    1,
                                    /* :: */[
                                      2,
                                      /* :: */[
                                        3,
                                        /* [] */0
                                      ]
                                    ]
                                  ])));
              }));
        Jest.test("notFoundString", (function () {
                return Jest.ExpectJs[/* toBe */2]("NOT_FOUND", Jest.ExpectJs[/* expect */0](Colors_Support.notFoundStr));
              }));
        Jest.test("safeGetEnv", (function () {
                return Jest.ExpectJs[/* toBe */2]("NOT_FOUND", Jest.ExpectJs[/* expect */0](Colors_Support.safeGetEnv("SOME_RUBBISH_ENV")));
              }));
        Jest.test("isColorCompatibleCi returns 1 if TRAVIS CI", (function () {
                (( process.env.CI = 'TRAVIS'));
                return Jest.ExpectJs[/* toBe */2](1, Jest.ExpectJs[/* expect */0](Colors_Support.isColorCompatibleCi(/* () */0)));
              }));
        Jest.test("isColorCompatibleCi returns 1 if CIRCLE CI", (function () {
                (( process.env.CI = 'CIRCLECI' ));
                return Jest.ExpectJs[/* toBe */2](1, Jest.ExpectJs[/* expect */0](Colors_Support.isColorCompatibleCi(/* () */0)));
              }));
        Jest.test("isColorCompatibleCi returns 1 if APPVEYOR CI", (function () {
                (( process.env.CI = 'APPVEYOR' ));
                return Jest.ExpectJs[/* toBe */2](1, Jest.ExpectJs[/* expect */0](Colors_Support.isColorCompatibleCi(/* () */0)));
              }));
        Jest.test("isColorCompatibleCi returns 1 if GITLAB_CI CI", (function () {
                (( process.env.CI = 'GITLAB_CI' ));
                return Jest.ExpectJs[/* toBe */2](1, Jest.ExpectJs[/* expect */0](Colors_Support.isColorCompatibleCi(/* () */0)));
              }));
        Jest.test("isColorCompatibleCi returns 1 if codeship CI", (function () {
                (( process.env.CI_NAME = 'codeship' ));
                (( process.env.CI = 'true' ));
                return Jest.ExpectJs[/* toBe */2](1, Jest.ExpectJs[/* expect */0](Colors_Support.isColorCompatibleCi(/* () */0)));
              }));
        Jest.test("isTeamCityCompatible returns 0 if old version", (function () {
                (( process.env.TEAMCITY_VERSION = '9.0.5 (build 32523)'));
                return Jest.ExpectJs[/* toBe */2](0, Jest.ExpectJs[/* expect */0](Colors_Support.isTeamCityCompatible(/* () */0)));
              }));
        Jest.test("isTeamCityCompatible returns 1 if newer version", (function () {
                (( process.env.TEAMCITY_VERSION = '9.1.5 (build 32523)'));
                return Jest.ExpectJs[/* toBe */2](1, Jest.ExpectJs[/* expect */0](Colors_Support.isTeamCityCompatible(/* () */0)));
              }));
        Jest.test("isColorTerm returns 0 if NO COLORTERM", (function () {
                (( delete process.env.COLORTERM ));
                return Jest.ExpectJs[/* toBe */2](0, Jest.ExpectJs[/* expect */0](Colors_Support.isColorTerm(/* () */0)));
              }));
        Jest.test("isColorTerm returns 1 if COLORTERM", (function () {
                (( process.env.COLORTERM = 'true'));
                return Jest.ExpectJs[/* toBe */2](1, Jest.ExpectJs[/* expect */0](Colors_Support.isColorTerm(/* () */0)));
              }));
        Jest.test("isBasicTerm returns 0 if NO TERM", (function () {
                (( delete process.env.TERM ));
                return Jest.ExpectJs[/* toBe */2](0, Jest.ExpectJs[/* expect */0](Colors_Support.isBasicTerminal(/* () */0)));
              }));
        Jest.test("isBasicTerm returns 1 if TERM is recognised terminal", (function () {
                (( process.env.TERM = 'xterm'));
                return Jest.ExpectJs[/* toBe */2](1, Jest.ExpectJs[/* expect */0](Colors_Support.isBasicTerminal(/* () */0)));
              }));
        Jest.test("isBasicTerm returns 0 if TERM is not recognised terminal", (function () {
                (( process.env.TERM = 'blah'));
                return Jest.ExpectJs[/* toBe */2](0, Jest.ExpectJs[/* expect */0](Colors_Support.isBasicTerminal(/* () */0)));
              }));
        Jest.test("isTerminal256 returns 1 if TERM is recognised terminal", (function () {
                (( process.env.TERM = 'blah-256'));
                return Jest.ExpectJs[/* toBe */2](2, Jest.ExpectJs[/* expect */0](Colors_Support.isTerminal256(/* () */0)));
              }));
        Jest.test("isTerminal256 returns 0 if TERM is recognised terminal", (function () {
                (( process.env.TERM = 'blah-156'));
                return Jest.ExpectJs[/* toBe */2](0, Jest.ExpectJs[/* expect */0](Colors_Support.isTerminal256(/* () */0)));
              }));
        Jest.test("isTerminal256 returns 0 if NO TERM", (function () {
                (( delete process.env.TERM ));
                return Jest.ExpectJs[/* toBe */2](0, Jest.ExpectJs[/* expect */0](Colors_Support.isTerminal256(/* () */0)));
              }));
        Jest.test("isFancyTerminal returns 3 if TERM_PROGRAM_VERSION is iTerm 3", (function () {
                (( delete process.env.TERM_PROGRAM ));
                (( delete process.env.TERM_PROGRAM_VERSION ));
                (( process.env.TERM_PROGRAM = 'iTerm.app'));
                (( process.env.TERM_PROGRAM_VERSION = '3.1.0'));
                return Jest.ExpectJs[/* toBe */2](3, Jest.ExpectJs[/* expect */0](Colors_Support.isFancyTerminal(/* () */0)));
              }));
        Jest.test("isFancyTerminal returns 2 if TERM_PROGRAM_VERSION is iTerm 2", (function () {
                (( delete process.env.TERM_PROGRAM ));
                (( delete process.env.TERM_PROGRAM_VERSION ));
                (( process.env.TERM_PROGRAM = 'iTerm.app'));
                (( process.env.TERM_PROGRAM_VERSION = '2.0.0'));
                return Jest.ExpectJs[/* toBe */2](2, Jest.ExpectJs[/* expect */0](Colors_Support.isFancyTerminal(/* () */0)));
              }));
        Jest.test("isFancyTerminal returns 3 if TERM_PROGRAM_VERSION is Hyper", (function () {
                (( delete process.env.TERM_PROGRAM ));
                (( delete process.env.TERM_PROGRAM_VERSION ));
                (( process.env.TERM_PROGRAM = 'Hyper'));
                return Jest.ExpectJs[/* toBe */2](3, Jest.ExpectJs[/* expect */0](Colors_Support.isFancyTerminal(/* () */0)));
              }));
        Jest.test("isFancyTerminal returns 0 if TERM is recognised terminal", (function () {
                (( delete process.env.TERM_PROGRAM ));
                (( process.env.TERM_PROGRAM = 'Apple_Terminal'));
                return Jest.ExpectJs[/* toBe */2](2, Jest.ExpectJs[/* expect */0](Colors_Support.isFancyTerminal(/* () */0)));
              }));
        Jest.test("isFancyTerminal returns 2 if NO TERM_PROGRAM_VERSION", (function () {
                (( delete process.env.TERM_PROGRAM ));
                (( process.env.TERM_PROGRAM = 'true'));
                return Jest.ExpectJs[/* toBe */2](0, Jest.ExpectJs[/* expect */0](Colors_Support.isFancyTerminal(/* () */0)));
              }));
        return Jest.test("isFancyTerminal returns 0 if NO TERM_PROGRAM", (function () {
                      (( delete process.env.TERM_PROGRAM ));
                      (( process.env.TERM_PROGRAM = 'true'));
                      return Jest.ExpectJs[/* toBe */2](0, Jest.ExpectJs[/* expect */0](Colors_Support.isFancyTerminal(/* () */0)));
                    }));
      }));

/*  Not a pure module */
