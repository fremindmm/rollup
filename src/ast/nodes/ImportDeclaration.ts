import { NodeBase } from './shared/Node';
import Literal from './Literal';
import ImportSpecifier from './ImportSpecifier';
import ImportDefaultSpecifier from './ImportDefaultSpecifier';
import ImportNamespaceSpecifier from './ImportNamespaceSpecifier';
import MagicString from 'magic-string';

export default class ImportDeclaration extends NodeBase {
	type: 'ImportDeclaration';
	isImportDeclaration: true;
	specifiers: (ImportSpecifier | ImportDefaultSpecifier | ImportNamespaceSpecifier)[];
	source: Literal<string>;

	bindChildren () { }

	initialiseNode () {
		this.isImportDeclaration = true;
	}

	render (code: MagicString) {
		code.remove(this.start, this.next || this.end);
	}
}