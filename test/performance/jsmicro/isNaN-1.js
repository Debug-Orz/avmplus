/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

var DESC = "<global>.isNaN on Math.PI";

function libloop() {
    return libloop2(Math.PI);
}

function libloop2(v) {
    var x = false;
    for ( var i=0 ; i < 100000 ; i++ )
	x = isNaN(v);
    return x;
}

TEST(libloop, "isNaN-1");
